import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LinkAlt, LinkAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LinkAlt",
  component: LinkAlt,
} as ComponentMeta<typeof LinkAlt>;

const Template: ComponentStory<typeof LinkAlt> = (args: LinkAltPropsI) => (
  <x.div display="flex" gap="20px">
    <LinkAlt {...args} />
    <LinkAlt {...args} fill="red.500" />
    <LinkAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
