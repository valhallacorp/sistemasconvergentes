import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEventosComponent } from './cadastro-eventos.component';

describe('CadastroEventosComponent', () => {
  let component: CadastroEventosComponent;
  let fixture: ComponentFixture<CadastroEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
