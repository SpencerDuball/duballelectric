import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Anchor, AnchorPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Anchor",
  component: Anchor,
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args: AnchorPropsI) => (
  <x.div display="flex" gap="20px">
    <Anchor {...args} />
    <Anchor {...args} fill="red.500" />
    <Anchor {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
