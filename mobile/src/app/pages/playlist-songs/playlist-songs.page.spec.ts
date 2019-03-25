import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSongsPage } from './playlist-songs.page';

describe('PlaylistSongsPage', () => {
  let component: PlaylistSongsPage;
  let fixture: ComponentFixture<PlaylistSongsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistSongsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
