import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudHeart, CloudHeartPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudHeart",
  component: CloudHeart,
} as ComponentMeta<typeof CloudHeart>;

const Template: ComponentStory<typeof CloudHeart> = (
  args: CloudHeartPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudHeart {...args} />
    <CloudHeart {...args} fill="red.500" />
    <CloudHeart {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
