import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Eye, EyePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Eye",
  component: Eye,
} as ComponentMeta<typeof Eye>;

const Template: ComponentStory<typeof Eye> = (args: EyePropsI) => (
  <x.div display="flex" gap="20px">
    <Eye {...args} />
    <Eye {...args} fill="red.500" />
    <Eye {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
