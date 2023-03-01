import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInformacionComponent } from './cliente-informacion.component';

describe('ClienteInformacionComponent', () => {
  let component: ClienteInformacionComponent;
  let fixture: ComponentFixture<ClienteInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
