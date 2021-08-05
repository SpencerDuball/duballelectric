import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CornerUpLeft, CornerUpLeftPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CornerUpLeft",
  component: CornerUpLeft,
} as ComponentMeta<typeof CornerUpLeft>;

const Template: ComponentStory<typeof CornerUpLeft> = (
  args: CornerUpLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <CornerUpLeft {...args} />
    <CornerUpLeft {...args} fill="red.500" />
    <CornerUpLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
