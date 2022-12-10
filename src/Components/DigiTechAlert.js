import { message } from 'antd';

const DigiTechAlert = (mes,type) => {
  if(type==="error"){
    message.error(mes,3);
  }
  else if(type==="success"){
    message.success(mes,3)
  }
  else if(type==="loading"){
    message.loading(mes,3)
  }
};


export {DigiTechAlert};