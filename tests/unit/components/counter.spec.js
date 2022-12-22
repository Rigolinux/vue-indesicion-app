/* eslint-disable prettier/prettier */

import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

 /*  test("Debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  }); */
  test("H2 debe de tener el valor por defecto 'Counter'", () => {

    const h2Value = wrapper.find("h2").text();
    expect(h2Value).toBe("Counter");
  });
  test("El valor por defecto debe ser 100", () => {

    
    const counter = wrapper.find("[data-testid='counter']").text();
    expect(counter).toBe("100");

  });
  test("El valor debe de incrementar y decrementar ", async() => {
    // buscar el botón
    const btns = wrapper.findAll("button");
    // Evento click
    //increment
    await btns[0].trigger("click");
    await btns[0].trigger("click");
    await btns[0].trigger("click");
    // decrement
    await btns[1].trigger("click");
    await btns[1].trigger("click");
    // Observar el comportamiento del componente si se hizo click y se incrementó en 1
    const counter = wrapper.find("[data-testid='counter']").text();
    expect(counter).toBe("101");
  });
  test("El valor se ingresa por defecto",()=>{
    const {start} = wrapper.props();
    const value = wrapper.find("[data-testid='counter']").text();
    expect(Number(value)).toBe(start);
    

  })
  test("el title debe ser asignado" ,()=>{
    const  titleTag = "Hola mundo";
    const wrapper = shallowMount(Counter,{
      props:{
        titleTag
      }
    });
    const h2Value = wrapper.find("h2").text();
    expect(h2Value).toBe(titleTag);
  })
});
