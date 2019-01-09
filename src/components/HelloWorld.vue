<template>
  <div>
    <input v-model="msg">
    <p>msg: {{ msg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <button @click="greet('nomal')">工厂模式</button>
    <button @click="greet('abstract')">抽象工厂模式</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// 工厂模式
import { Shape, ShapeFactory } from "../assets/ts/factory";
import { AbstractFactory, FactoryProducer } from "../assets/ts/AbstractFactory";
@Component
export default class HelloWorld extends Vue {
  // 初始化数据
  msg = 123;

  // 声明周期钩子
  mounted() {
    // this.greet()
  }

  // 计算属性
  get computedMsg() {
    return "computed " + this.msg;
  }

  // 方法
  greet(type) {
    switch (type) {
      case "nomal":
        // 工厂模式
        let shapeFactory: ShapeFactory = new ShapeFactory();
        //获取 Circle 的对象，并调用它的 draw 方法
        let shape1: Shape = shapeFactory.getShape("CIRCLE");
        //调用 Circle 的 draw 方法
        shape1.draw();
        console.log(shape1.interval);
        break;
      case "abstract":
        let shapeFactory2:AbstractFactory  =  FactoryProducer.getFactory("SHAPE");
        let shape:Shape = shapeFactory2.getShape('CIRCLE');
        shape.draw()

        let colorFactory:AbstractFactory = FactoryProducer.getFactory("COLOR");
        let color = colorFactory.getColor('red');
        color.fill();
        break;
    }

    //抽象工厂模式
  }
}
</script>
