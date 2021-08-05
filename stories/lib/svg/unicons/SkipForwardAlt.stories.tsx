import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SkipForwardAlt, SkipForwardAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SkipForwardAlt",
  component: SkipForwardAlt,
} as ComponentMeta<typeof SkipForwardAlt>;

const Template: ComponentStory<typeof SkipForwardAlt> = (
  args: SkipForwardAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <SkipForwardAlt {...args} />
    <SkipForwardAlt {...args} fill="red.500" />
    <SkipForwardAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
