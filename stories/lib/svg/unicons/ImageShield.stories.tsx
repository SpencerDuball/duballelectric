import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageShield, ImageShieldPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageShield",
  component: ImageShield,
} as ComponentMeta<typeof ImageShield>;

const Template: ComponentStory<typeof ImageShield> = (
  args: ImageShieldPropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageShield {...args} />
    <ImageShield {...args} fill="red.500" />
    <ImageShield {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
