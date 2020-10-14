import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoatsPage } from './boats.page';

describe('BoatsPage', () => {
  let component: BoatsPage;
  let fixture: ComponentFixture<BoatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
