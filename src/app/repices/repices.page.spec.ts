import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepicesPage } from './repices.page';

describe('RepicesPage', () => {
  let component: RepicesPage;
  let fixture: ComponentFixture<RepicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
