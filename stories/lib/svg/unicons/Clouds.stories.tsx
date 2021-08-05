import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Clouds, CloudsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Clouds",
  component: Clouds,
} as ComponentMeta<typeof Clouds>;

const Template: ComponentStory<typeof Clouds> = (args: CloudsPropsI) => (
  <x.div display="flex" gap="20px">
    <Clouds {...args} />
    <Clouds {...args} fill="red.500" />
    <Clouds {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
