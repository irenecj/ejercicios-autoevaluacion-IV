const { Etcd3 } = require('etcd3');
const cliente = new Etcd3();

(async () => {
  const clave = await cliente.get('claveIrene').string();
  console.log("La clave de Irene es: ", clave);

  await cliente.delete().all()
})();
