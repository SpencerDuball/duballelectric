import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeStar, EnvelopeStarPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeStar",
  component: EnvelopeStar,
} as ComponentMeta<typeof EnvelopeStar>;

const Template: ComponentStory<typeof EnvelopeStar> = (
  args: EnvelopeStarPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeStar {...args} />
    <EnvelopeStar {...args} fill="red.500" />
    <EnvelopeStar {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
