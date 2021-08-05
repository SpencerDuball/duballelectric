import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LeftArrowFromLeft, LeftArrowFromLeftPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LeftArrowFromLeft",
  component: LeftArrowFromLeft,
} as ComponentMeta<typeof LeftArrowFromLeft>;

const Template: ComponentStory<typeof LeftArrowFromLeft> = (
  args: LeftArrowFromLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <LeftArrowFromLeft {...args} />
    <LeftArrowFromLeft {...args} fill="red.500" />
    <LeftArrowFromLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
