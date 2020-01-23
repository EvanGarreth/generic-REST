import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceAction } from '../../core/services/http-resource/enums/resource-action.enum';
import { HttpSubResourceService } from '../../core/services/http-resource/http-sub-resource-service/http-sub-resource.service';
import { HttpVerb } from '../../core/services/resource-url-service/enums/http-verbs.enum';
import { ResourceUrlService } from '../../core/services/resource-url-service/resource-url.service';
import { Parent } from '../models/parent.model';

@Injectable({
  providedIn: 'root'
})
export class ParentService extends HttpSubResourceService<Parent, Parent> {

  constructor(httpClient: HttpClient, resourceUrlService: ResourceUrlService) {
    super(
      'RootParent',
      httpClient,
      resourceUrlService
    );
  }

  protected responseHandler(response: any, verb: HttpVerb, action: ResourceAction): Parent | Parent[] {
    switch (action) {
      case ResourceAction.Read:
        return Parent.fromJson(response);
      case ResourceAction.Update:
        return
      default:
        throw new Error('Response unhandled');
    }
  }
}
