import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CompressAlt, CompressAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CompressAlt",
  component: CompressAlt,
} as ComponentMeta<typeof CompressAlt>;

const Template: ComponentStory<typeof CompressAlt> = (
  args: CompressAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <CompressAlt {...args} />
    <CompressAlt {...args} fill="red.500" />
    <CompressAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
