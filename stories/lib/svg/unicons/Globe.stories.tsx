import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Globe, GlobePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Globe",
  component: Globe,
} as ComponentMeta<typeof Globe>;

const Template: ComponentStory<typeof Globe> = (args: GlobePropsI) => (
  <x.div display="flex" gap="20px">
    <Globe {...args} />
    <Globe {...args} fill="red.500" />
    <Globe {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
