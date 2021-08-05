import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LeftIndentAlt, LeftIndentAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LeftIndentAlt",
  component: LeftIndentAlt,
} as ComponentMeta<typeof LeftIndentAlt>;

const Template: ComponentStory<typeof LeftIndentAlt> = (
  args: LeftIndentAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <LeftIndentAlt {...args} />
    <LeftIndentAlt {...args} fill="red.500" />
    <LeftIndentAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
