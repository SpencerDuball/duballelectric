import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LeftArrowToLeft, LeftArrowToLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LeftArrowToLeft",
  component: LeftArrowToLeft,
} as ComponentMeta<typeof LeftArrowToLeft>;

const Template: ComponentStory<typeof LeftArrowToLeft> = (
  args: LeftArrowToLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <LeftArrowToLeft {...args} />
    <LeftArrowToLeft {...args} fill="red.500" />
    <LeftArrowToLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
