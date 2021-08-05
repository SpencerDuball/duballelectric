import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CornerUpRightAlt, CornerUpRightAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CornerUpRightAlt",
  component: CornerUpRightAlt,
} as ComponentMeta<typeof CornerUpRightAlt>;

const Template: ComponentStory<typeof CornerUpRightAlt> = (
  args: CornerUpRightAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <CornerUpRightAlt {...args} />
    <CornerUpRightAlt {...args} fill="red.500" />
    <CornerUpRightAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
