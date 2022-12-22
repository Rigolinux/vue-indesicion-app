/* eslint-disable prettier/prettier */

import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe("Indecision component", () => {
  let wrapper;
  let consoleSpy;
  //mock fetch
  global.fetch = jest.fn(()=> Promise.resolve({
    json: ()=> Promise.resolve({
        answer: "yes",
        forced: false,
        image: "https://yesno.wtf/assets/yes/1.gif"
    })
  }))
  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    //to spy the console.log
    consoleSpy = jest.spyOn(console, "log");
    //clean mooks
    jest.clearAllMocks();
   
  });
    test("Debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
    });
    test("Escribir en el input no debe hacer nada", async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
        const input = wrapper.find("input");
        await input.setValue("Hola mundo");
        expect(consoleSpy).toHaveBeenCalled();
        expect(getAnswerSpy).not.toHaveBeenCalled();
    });

    test("El simbolo de ? debe disparar la peticion", async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
        const input = wrapper.find("input");
        await input.setValue("pregunta?");
        expect(getAnswerSpy).toHaveBeenCalled();
    });

    test("probar el get answer ", async() => {
        await wrapper.vm.getAnswer();
        const img = wrapper.find("img");
        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.imagesrc).toBe("https://yesno.wtf/assets/yes/1.gif");
        expect(wrapper.vm.answer).toBe("Si");
    });

    test("probar el get answer- fallo ", async() => {

        fetch.mockImplementationOnce(()=> Promise.reject("API is down"));
        await wrapper.vm.getAnswer();
        const img = wrapper.find("img");
        expect(img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe("No se ha podido obtener la respuesta");

    });
});
