"""PDF generator placeholder"""

def generate_pdf(content: str, out_path: str) -> None:
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(content)
