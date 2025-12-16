"""Simple PDF generator placeholder."""


def generate_pdf(content: str, output_path: str) -> None:
    """Write plain text to a file with .pdf extension as a placeholder."""
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)
