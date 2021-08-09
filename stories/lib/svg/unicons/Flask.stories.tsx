import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Flask, FlaskPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Flask",
  component: Flask,
} as ComponentMeta<typeof Flask>;

const Template: ComponentStory<typeof Flask> = (args: FlaskPropsI) => (
  <x.div display="flex" gap="20px">
    <Flask {...args} />
    <Flask {...args} fill="red.500" />
    <Flask {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
