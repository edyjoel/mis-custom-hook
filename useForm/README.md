# useForm

Ejemplo:
```
const initialForm = {
  name: '',
  age: 0,
  emai: ''
};

const [ formValues, handleInputChange, reset ] = useForm( initialForm );
```