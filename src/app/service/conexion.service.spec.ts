import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { ConexionService } from './conexion.service';

describe('ConexionService', () => {
  let service: ConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule],});
    service = TestBed.inject(ConexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Dispone de la funcion leerApi', () => {
    const service: ConexionService = TestBed.get(ConexionService);
    expect(service.leerApi).toBeTruthy();
  })

  it('Dispone de la funcion postApi', () => {
    const service: ConexionService = TestBed.get(ConexionService);
    expect(service.postApi).toBeTruthy();
  })

  it('Dispone de la funcion putApi', () => {
    const service: ConexionService = TestBed.get(ConexionService);
    expect(service.putApi).toBeTruthy();
  })

  it('Dispone de la funcion deleteApi', () => {
    const service: ConexionService = TestBed.get(ConexionService);
    expect(service.deleteApi).toBeTruthy();
  })
});
