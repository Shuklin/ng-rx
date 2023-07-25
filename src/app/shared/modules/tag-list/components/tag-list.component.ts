import {Component, Input} from "@angular/core";
import {TagType} from "../../../types/tagType";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html'
})
export class TagListComponent {
  @Input('tags') tagsProps: Array<TagType>;
}
