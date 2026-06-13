from html.parser import HTMLParser
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class SiteParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.images = []
        self.filters = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if values.get("id"):
            self.ids.add(values["id"])
        if tag == "img":
            self.images.append(values)
        if values.get("data-filter"):
            self.filters.append(values["data-filter"])


class PersonalSiteTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = (ROOT / "index.html").read_text(encoding="utf-8")
        cls.parser = SiteParser()
        cls.parser.feed(cls.html)

    def test_all_requested_sections_exist(self):
        expected = {
            "home",
            "articles",
            "projects",
            "lectures",
            "footprints",
            "achievements",
            "about",
            "contact",
        }
        self.assertTrue(expected.issubset(self.parser.ids))

    def test_portrait_is_local_and_accessible(self):
        portrait = next(
            image for image in self.parser.images if image.get("src") == "assets/jiang-tian.jpg"
        )
        self.assertEqual(portrait.get("alt"), "姜湉个人肖像")
        self.assertTrue((ROOT / portrait["src"]).is_file())

    def test_article_categories_are_filterable(self):
        expected = {"all", "practice", "resources", "research", "theory", "notes"}
        self.assertTrue(expected.issubset(set(self.parser.filters)))

    def test_static_assets_are_connected(self):
        self.assertIn('href="style.css"', self.html)
        self.assertIn('src="script.js"', self.html)
        self.assertTrue((ROOT / "style.css").is_file())
        self.assertTrue((ROOT / "script.js").is_file())


if __name__ == "__main__":
    unittest.main()
