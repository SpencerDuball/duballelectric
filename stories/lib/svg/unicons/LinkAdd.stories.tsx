import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LinkAdd, LinkAddPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LinkAdd",
  component: LinkAdd,
} as ComponentMeta<typeof LinkAdd>;

const Template: ComponentStory<typeof LinkAdd> = (args: LinkAddPropsI) => (
  <x.div display="flex" gap="20px">
    <LinkAdd {...args} />
    <LinkAdd {...args} fill="red.500" />
    <LinkAdd {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
