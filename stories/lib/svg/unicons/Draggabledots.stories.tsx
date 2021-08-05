import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Draggabledots, DraggabledotsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Draggabledots",
  component: Draggabledots,
} as ComponentMeta<typeof Draggabledots>;

const Template: ComponentStory<typeof Draggabledots> = (
  args: DraggabledotsPropsI
) => (
  <x.div display="flex" gap="20px">
    <Draggabledots {...args} />
    <Draggabledots {...args} fill="red.500" />
    <Draggabledots {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
