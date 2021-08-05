import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Processor, ProcessorPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Processor",
  component: Processor,
} as ComponentMeta<typeof Processor>;

const Template: ComponentStory<typeof Processor> = (args: ProcessorPropsI) => (
  <x.div display="flex" gap="20px">
    <Processor {...args} />
    <Processor {...args} fill="red.500" />
    <Processor {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
