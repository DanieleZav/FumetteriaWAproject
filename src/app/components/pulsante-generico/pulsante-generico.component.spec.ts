import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PulsanteGenericoComponent } from './pulsante-generico.component';

describe('PulsanteGenericoComponent', () => {
  let component: PulsanteGenericoComponent;
  let fixture: ComponentFixture<PulsanteGenericoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PulsanteGenericoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PulsanteGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
