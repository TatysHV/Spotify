import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed  } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProfilePage } from './profile.page';
import { ProfileService } from 'src/app/services/profile.service';
import { of } from 'rxjs';

describe('ProfilePage', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;
  let profileService: ProfileService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [ProfileService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    profileService = TestBed.get(ProfileService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Profile', () => {
    const profile = {id: 1};
    beforeEach((done) => {
      spyOn(profileService, 'getProfile').and.returnValue(
       of(profile)
      );
      component.getProfile();
      done();
    });

    it('Should initialize profile with the correct data', () => {
      expect(component.profile).toBeDefined();
    });
  });

  describe('Current Song disabled', () => {
    const song = {};
    beforeEach((done) => {
      spyOn(profileService, 'getCurrentSong').and.returnValue(
       of(song)
      );
      component.getCurrentSong();
      done();
    });

    it('Should hide the songs player', () => {
      expect(component.currentSong.id).toBeUndefined();
      expect(component.isPlaying).toBeFalsy();
      expect(component.isPaused).toBeTruthy();
    });
  });

  describe('Current Song is paused', () => {
    const song = {'is_playing' : false};
    beforeEach((done) => {
      spyOn(profileService, 'getCurrentSong').and.returnValue(
       of(song)
      );
      component.getCurrentSong();
      done();
    });

    it('Should show the songs player paused', () => {
      expect(component.currentSong).toBe(song);
      expect(component.isPlaying).toBeFalsy();
      expect(component.isPaused).toBeTruthy();
    });
  });

  describe('Current Song is paused', () => {
    const song = {'is_playing' : false};
    beforeEach((done) => {
      spyOn(profileService, 'getCurrentSong').and.returnValue(
       of(song)
      );
      component.getCurrentSong();
      done();
    });

    it('Should show the songs player paused', () => {
      expect(component.currentSong).toBe(song);
      expect(component.isPlaying).toBeFalsy();
      expect(component.isPaused).toBeTruthy();
    });
  });

  describe('Current Song is paused', () => {
    const song = {'is_playing' : false};
    beforeEach((done) => {
      spyOn(profileService, 'getCurrentSong').and.returnValue(
       of(song)
      );
      component.getCurrentSong();
      done();
    });

    it('Should show the songs player paused', () => {
      expect(component.currentSong).toBe(song);
      expect(component.isPlaying).toBeFalsy();
      expect(component.isPaused).toBeTruthy();
    });
  });
});
