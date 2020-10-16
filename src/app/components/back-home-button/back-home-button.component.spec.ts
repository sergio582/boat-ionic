import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackHomeButtonComponent } from './back-home-button.component';

describe('BackHomeButtonComponent', () => {
  let component: BackHomeButtonComponent;
  let fixture: ComponentFixture<BackHomeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackHomeButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackHomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
