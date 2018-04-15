import { Section } from '../models/section';

const sections = [{
  "title": "Menu 1",
  "id": "1",
  "hide": true,
  "sections": []
}, {
  "id": "2",
  "title": "Menu 2",
  "hide": true,
  "sections": [{
    "id": "2.1",
    "title": "Sub Menu 2.1",
    "hide": true,
    "sections": [{
      "id": "2.1.1",
      "title": "Sub Sub Menu 2.1.1",
      "hide": true,
      "sections": [{
        "id": "2.1.1.1",
        "title": "Sub Sub Menu 2.1.1.1, Sibling 1",
        "hide": true,
        "sections": []
      }, {
        "id": "2.1.1.2",
        "title": "Sub Sub Sub Menu 2.1.1.2, Sibling 2",
        "hide": true,
        "sections": []
      }]
    }]
  }, {
    "id": "2.2",
    "title": "Sub Menu 2.2",
    "hide": true,
    "sections": []
  }]
}, {
  "id": "3",
  "title": "Menu 3",
  "hide": true,
  "sections": []
}] as Section[];

export default sections;