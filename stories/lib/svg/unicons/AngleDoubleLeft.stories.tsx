import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AngleDoubleLeft, AngleDoubleLeftPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AngleDoubleLeft",
  component: AngleDoubleLeft,
} as ComponentMeta<typeof AngleDoubleLeft>;

const Template: ComponentStory<typeof AngleDoubleLeft> = (
  args: AngleDoubleLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <AngleDoubleLeft {...args} />
    <AngleDoubleLeft {...args} fill="red.500" />
    <AngleDoubleLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
