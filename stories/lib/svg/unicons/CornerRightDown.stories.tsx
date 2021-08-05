import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CornerRightDown, CornerRightDownPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CornerRightDown",
  component: CornerRightDown,
} as ComponentMeta<typeof CornerRightDown>;

const Template: ComponentStory<typeof CornerRightDown> = (
  args: CornerRightDownPropsI
) => (
  <x.div display="flex" gap="20px">
    <CornerRightDown {...args} />
    <CornerRightDown {...args} fill="red.500" />
    <CornerRightDown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
