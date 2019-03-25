import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlaylistsPage } from './playlists.page';

describe('PlaylistsPage', () => {
  let component: PlaylistsPage;
  let fixture: ComponentFixture<PlaylistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
