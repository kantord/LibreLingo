"""Sphinx configuration."""
from datetime import datetime


project = "LibreLingo to JSON"
author = "Dániel Kántor"
copyright = f"{datetime.now().year}, {author}"
extensions = ["sphinx.ext.autodoc", "sphinx.ext.napoleon"]
autodoc_typehints = "description"
