import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CompressAltLeft, CompressAltLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CompressAltLeft",
  component: CompressAltLeft,
} as ComponentMeta<typeof CompressAltLeft>;

const Template: ComponentStory<typeof CompressAltLeft> = (
  args: CompressAltLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <CompressAltLeft {...args} />
    <CompressAltLeft {...args} fill="red.500" />
    <CompressAltLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
