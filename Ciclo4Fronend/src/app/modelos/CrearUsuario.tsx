class CrearUsuario {
  public numDocumento: string;
  public nombre: string;
  public apellido: string;
  public email: string;
  public telefono: string;
  public fecNac: Date;
  public password: string;

  constructor(nom: string, cor: string, cla: string, ndoc: string, tel: string, fnac: Date, apll: string) {
    this.numDocumento = ndoc;
    this.nombre = nom;
    this.apellido = apll;
    this.email = cor;
    this.telefono = tel;
    this.fecNac = fnac;
    this.password = cla;
    
  }
}

export default CrearUsuario;
