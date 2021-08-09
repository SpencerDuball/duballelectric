import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AngleLeft, AngleLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleLeft",
  component: AngleLeft,
} as ComponentMeta<typeof AngleLeft>;

const Template: ComponentStory<typeof AngleLeft> = (args: AngleLeftPropsI) => (
  <x.div display="flex" gap="20px">
    <AngleLeft {...args} />
    <AngleLeft {...args} fill="red.500" />
    <AngleLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
