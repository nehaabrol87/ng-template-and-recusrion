# ng-template-and-recusrion
Demonstrate ng template, ngTemplateOutlet and ng-container usage to implement a nested data structure

# Run project locally
* git clone repository
* cd (repo)
* npm install 
* ng serve

# Sample Data
```
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
}];
```


# Sample Output
![alt text](http://url/to/img.png)

# Magical HTML
```
<h1>Nested Data and the power of ngTemplateOutlet</h1>
<div class="app__sections">
  <ng-template #nestedList let-sections>
  <accordion *ngFor="let section of sections;" >
    <accordion-group heading = {{section.title}}>
      <span *ngIf="hasSubSections(section)">
        <ng-container *ngTemplateOutlet="nestedList; context:{ $implicit: section.sections }">
        </ng-container>
      </span>
      <span  class="app__no-subsections" *ngIf="!hasSubSections(section)"> This does not have any sub sections</span>
    </accordion-group>
  </accordion>
  </ng-template>
  <ng-container *ngTemplateOutlet="nestedList; context:{ $implicit: sections }"></ng-container>
</div>
```
