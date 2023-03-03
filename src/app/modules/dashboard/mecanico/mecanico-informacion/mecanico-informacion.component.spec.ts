import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MecanicoInformacionComponent } from './mecanico-informacion.component';

describe('MecanicoInformacionComponent', () => {
  let component: MecanicoInformacionComponent;
  let fixture: ComponentFixture<MecanicoInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MecanicoInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanicoInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
