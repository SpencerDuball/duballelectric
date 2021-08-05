import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { RightIndentAlt, RightIndentAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/RightIndentAlt",
  component: RightIndentAlt,
} as ComponentMeta<typeof RightIndentAlt>;

const Template: ComponentStory<typeof RightIndentAlt> = (
  args: RightIndentAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <RightIndentAlt {...args} />
    <RightIndentAlt {...args} fill="red.500" />
    <RightIndentAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
