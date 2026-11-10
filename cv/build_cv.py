#!/usr/bin/env python3
"""Gera os currículos em PDF a partir de cv/pt.json e cv/en.json.

O conteúdo fica versionado em JSON (o mesmo texto que o portfólio mostra), e o
PDF é só a renderização. Saída em public/files/, que é o link do site.

Requisitos: Python 3, reportlab e a fonte Carlito (pacote fonts-crosextra-carlito
no Debian/Ubuntu). Uso: python3 cv/build_cv.py
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import KeepTogether, ListFlowable, ListItem, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parent.parent
FONT_DIRS = [Path("/usr/share/fonts/truetype/crosextra"), Path.home() / ".fonts", ROOT / "cv" / "fonts"]

INK = HexColor("#1b2a3a")
MUTED = HexColor("#4b5d6e")
ACCENT = HexColor("#2f6f62")
RULE = HexColor("#c9d6df")


def register_fonts() -> None:
    files = {"Carlito": "Carlito-Regular.ttf", "Carlito-Bold": "Carlito-Bold.ttf", "Carlito-Italic": "Carlito-Italic.ttf", "Carlito-BoldItalic": "Carlito-BoldItalic.ttf"}
    for name, file in files.items():
        path = next((d / file for d in FONT_DIRS if (d / file).exists()), None)
        if path is None:
            sys.exit(f"Fonte {file} não encontrada. Instale fonts-crosextra-carlito ou coloque os .ttf em cv/fonts/.")
        pdfmetrics.registerFont(TTFont(name, str(path)))
    pdfmetrics.registerFontFamily("Carlito", normal="Carlito", bold="Carlito-Bold", italic="Carlito-Italic", boldItalic="Carlito-BoldItalic")


def styles() -> dict[str, ParagraphStyle]:
    base = ParagraphStyle("base", fontName="Carlito", fontSize=9.6, leading=12.2, textColor=INK, alignment=TA_LEFT)
    return {
        "name": ParagraphStyle("name", parent=base, fontName="Carlito-Bold", fontSize=22, leading=25),
        "headline": ParagraphStyle("headline", parent=base, fontName="Carlito-Bold", fontSize=11.5, leading=14, textColor=ACCENT, spaceAfter=3),
        "contact": ParagraphStyle("contact", parent=base, fontSize=9, leading=11.4, textColor=MUTED),
        "section": ParagraphStyle("section", parent=base, fontName="Carlito-Bold", fontSize=11.5, leading=14, textColor=ACCENT, spaceBefore=7, spaceAfter=2),
        "body": base,
        "skill": ParagraphStyle("skill", parent=base, fontSize=9.2, leading=11.6),
        "job": ParagraphStyle("job", parent=base, fontName="Carlito-Bold", fontSize=10.6, leading=13, spaceBefore=4),
        "meta": ParagraphStyle("meta", parent=base, fontName="Carlito-Italic", fontSize=9, leading=11.4, textColor=MUTED, spaceAfter=1),
        "bullet": ParagraphStyle("bullet", parent=base, fontSize=9.4, leading=11.8),
        "note": ParagraphStyle("note", parent=base, fontSize=9, leading=11.4, textColor=MUTED, spaceBefore=3),
        "stack": ParagraphStyle("stack", parent=base, fontName="Carlito-Bold", fontSize=8.8, leading=11, textColor=MUTED, spaceAfter=1),
    }


def rule() -> Table:
    line = Table([[""]], colWidths=["100%"], rowHeights=[1])
    line.setStyle(TableStyle([("LINEBELOW", (0, 0), (-1, -1), 0.6, RULE)]))
    return line


def bullets(items: list[str], st: ParagraphStyle) -> ListFlowable:
    return ListFlowable(
        [ListItem(Paragraph(text, st), leftIndent=9, value="•") for text in items],
        bulletType="bullet", start="•", leftIndent=9, bulletFontName="Carlito", bulletFontSize=8.5, bulletOffsetY=-0.5,
    )


def build(content: dict) -> Path:
    st = styles()
    out = ROOT / "public" / "files" / content["file"]
    doc = SimpleDocTemplate(
        str(out), pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm, topMargin=11 * mm, bottomMargin=10 * mm,
        title=f"{content['name']} — CV", author=content["name"], subject=content["headline"], lang=content["lang"],
    )
    labels = content["labels"]
    flow: list = [
        Paragraph(content["name"], st["name"]),
        Paragraph(content["headline"], st["headline"]),
        *[Paragraph(line, st["contact"]) for line in content["contact"]],
        Spacer(1, 2),
        Paragraph(labels["summary"], st["section"]), rule(), Spacer(1, 3),
        Paragraph(content["summary"], st["body"]),
        Paragraph(labels["skills"], st["section"]), rule(), Spacer(1, 3),
        *[Paragraph(f"<b>{title}:</b> {items}", st["skill"]) for title, items in content["skills"]],
        Paragraph(labels["experience"], st["section"]), rule(),
    ]
    for job in content["experience"]:
        flow.append(KeepTogether([
            Paragraph(f"{job['company']} — {job['role']}", st["job"]),
            Paragraph(job["meta"], st["meta"]),
            bullets(job["bullets"], st["bullet"]),
        ]))
    flow.append(Paragraph(content["experience_note"], st["note"]))

    flow += [Paragraph(labels["projects"], st["section"]), rule()]
    for project in content["projects"]:
        flow.append(KeepTogether([
            Paragraph(f"<b>{project['name']}</b> — {project['text']} <font color='#4b5d6e'>({project['url']})</font>", st["job"].clone("projhead", fontName="Carlito", fontSize=9.6, leading=12.2)),
            Paragraph(project["stack"], st["stack"]),
            bullets(project["bullets"], st["bullet"]),
        ]))
    flow.append(Paragraph(content["projects_note"], st["note"]))

    flow += [
        Paragraph(labels["education"], st["section"]), rule(), Spacer(1, 2),
        bullets(content["education"], st["bullet"]),
        Paragraph(labels["languages"], st["section"]), rule(), Spacer(1, 2),
        Paragraph(content["languages"], st["body"]),
    ]
    doc.build(flow)
    return out


def main() -> int:
    register_fonts()
    for lang in ("pt", "en"):
        content = json.loads((ROOT / "cv" / f"{lang}.json").read_text(encoding="utf-8"))
        print(build(content).relative_to(ROOT))
    return 0


if __name__ == "__main__":
    sys.exit(main())
