import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SocialDistancing, SocialDistancingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SocialDistancing",
  component: SocialDistancing,
} as ComponentMeta<typeof SocialDistancing>;

const Template: ComponentStory<typeof SocialDistancing> = (
  args: SocialDistancingPropsI
) => (
  <x.div display="flex" gap="20px">
    <SocialDistancing {...args} />
    <SocialDistancing {...args} fill="red.500" />
    <SocialDistancing {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
